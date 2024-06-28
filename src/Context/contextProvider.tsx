import { createContext, useContext, useState, ReactNode } from "react";

interface PokemonContextType {
  pokemonType: string;
  handleType: (selectedType: string) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

interface PokemonProviderProps {
  children: ReactNode;
}

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemonType, setType] = useState<string>("");

  const handleType = (selectedType: string) => {
    setType(selectedType);
  };

  return (
    <PokemonContext.Provider value={{ pokemonType, handleType }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextType => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};
