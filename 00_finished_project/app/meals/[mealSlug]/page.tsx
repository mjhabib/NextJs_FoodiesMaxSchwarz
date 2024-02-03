import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { S3_FOOD_IMAGE_BUCKET_URL } from "@/constants/s3.constants";

type MealsDetailsPageProps = {
  params: {
    mealSlug: string;
  };
};

export async function generateMetadata({
  params,
}: MealsDetailsPageProps): Promise<Metadata> {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealsDetailsPage({ params }: MealsDetailsPageProps) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replaceAll("\n", "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`${S3_FOOD_IMAGE_BUCKET_URL}/${meal.image}`}
            fill
            alt={meal.title}
          />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}></p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
