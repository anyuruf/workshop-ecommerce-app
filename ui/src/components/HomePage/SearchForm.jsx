import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function SearchForm() {
  return (
    <>
    {/* flex classes are for the parent container */}
    <form className="gap-4 justify-center flex-grow hidden md:flex">
      <div className="relative w-full max-w-xl">
        {/* Left button top-0 for (top-1/2 -translate-y-1/2) */}
        <Button
          type="button"
          className="absolute left-0 top-0 py-2 px-4 inline-flex items-center gap-2 rounded-r-none"
        >
          <span>Category</span>
          <ChevronDown className="w-4 h-4" />
        </Button>

        {/* Input */}
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full px-30"
        />

        {/* Right button */}
        <Button
          type="submit"
          className="absolute right-0 top-0 z-10 py-2 px-4 inline-flex items-center gap-2 rounded-l-none"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </Button>
      </div>
    </form>
    </>
  );
}


export default SearchForm