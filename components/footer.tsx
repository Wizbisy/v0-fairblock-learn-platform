import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fairblock Learn. All rights reserved.
          </p>
          <p className="text-base font-bold">
            Created by{" "}
            <Link
              href="https://x.com/lexiweb31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 transition-all hover:underline hover:brightness-110"
            >
              Lexi
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
