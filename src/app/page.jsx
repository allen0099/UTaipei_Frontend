import { redirect } from "next/navigation";

export default function Home() {
  // I don't want to show the home page, so I redirect to the search page
  // Extend if we want to set up a landing page in the future
  redirect("/search");
}
