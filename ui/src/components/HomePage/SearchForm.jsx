import { Search } from 'lucide-react';


function SearchForm() {
  return (
     <div>
        <form
            action=""
            className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                <Search className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                <input
                    placeholder="Your mail address"
                    className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                    type="email"
                />

                <div className="md:pr-1.5 lg:pr-0">
                    <Button
                        aria-label="submit"
                        className="rounded-(--radius)">
                        <span className="hidden md:block">Get Started</span>
                        <SendHorizonal
                            className="relative mx-auto size-5 md:hidden"
                            strokeWidth={2}
                        />
                    </Button>
                </div>
            </div>
        </form>

        <ul className="list-inside list-disc space-y-2">
            <li>Faster</li>
            <li>Modern</li>
            <li>100% Customizable</li>
        </ul>
    </div>
  )
}

export default SearchForm