import { loadJson, saveJson, STORAGE_KEYS } from "@/lib/storage";
import { createContext, useContext, useEffect, useState } from "react";

type SearchContextType = {
  query: string;
  setQuery: (value: string) => void;
  hydrated: boolean;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    loadJson<string>(STORAGE_KEYS.orderSearch, "").then((stored) => {
      setQuery(stored);
      setHydrated(true);
    });
  }, []);
  useEffect(() => {
    if (hydrated) {
      saveJson(STORAGE_KEYS.orderSearch, query);
    }
  }, [query, hydrated]);

  return (
    <SearchContext.Provider value={{ query, setQuery, hydrated }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error("useSearch must be used inside SearchProvider");
  }

  return context;
}
