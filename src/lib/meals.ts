import { MealFormData } from '@src/types/mealFormDataTypes';
import { MealTypes } from '@src/types/mealTypes';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { v4 } from 'uuid';
import fs from 'node:fs';
// import { S3 } from "@aws-sdk/client-s3";

const db = new sql('meals.db');

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all() as MealTypes[];
}

export function getMealBySlug(slug: string) {
  return db
    .prepare('SELECT * FROM meals WHERE slug = ?')
    .get(slug) as MealTypes;
}

export async function saveMeal(mealFormData: MealFormData) {
  const slug = slugify(mealFormData.title as string, { lower: true });
  const instructions = xss(mealFormData.instructions as string);

  const extension = mealFormData.image?.name.split('.').pop();
  if (!extension) return;
  const filename = `uploaded-${slug}_${v4()}.${extension}`;

  const bufferedImage = await mealFormData.image?.arrayBuffer();
  if (!bufferedImage) return;

  //  Save to local file system
  const stream = fs.createWriteStream(`public/images/${filename}`);
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error('Saving image failed!');
  });

  // Save to AWS S3
  // s3.putObject({
  //   Bucket: S3_FOOD_IMAGE_BUCKET,
  //   Key: filename,
  //   Body: Buffer.from(bufferedImage),
  //   ContentType: mealFormData.image?.type,
  // });

  const meal: Omit<MealTypes, 'id'> = {
    title: mealFormData.title as string,
    slug,
    image: filename,
    summary: mealFormData.summary as string,
    creator: mealFormData.creator as string,
    creator_email: mealFormData.creator_email as string,
    instructions,
  };

  db.prepare(
    `
    INSERT INTO meals 
      (title, summary, instructions,creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
  `
  ).run(meal);
}
