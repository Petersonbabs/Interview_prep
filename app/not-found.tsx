
import BackIcon from "@/components/commons/BackIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background text-foreground">
      <BackIcon text="Previous page" />
      <img loading="lazy" src="/error.svg" alt="Error" className="w-full h-full" />
      <div className="max-w-md space-y-6">
        <h2 className="text-3xl font-semibold text-light-100">
          Page not found
        </h2>
        <p className="text-muted-foreground text-body sm:text-lg">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <Button asChild>
          <Link href="/" className="btn-primary">
            Go back home
          </Link>
        </Button>
      </div>
    </main>
  );
}
