import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

function CardDetail({ data }: any) {
  const { name, types, stats, abilities, moves, sprites } = data;
  return (
    <Card className="max-w-[400px] mx-auto">
      <div
        className="w-full text-center relative h-[300px]"
        style={{ backgroundColor: "#5fe2c9", position: "relative" }}
      >
        <Image
          src={sprites?.other["official-artwork"]?.front_default}
          alt={name}
          // width={100}
          // height={100}
          loading="lazy"
          fill
          style={{
            objectFit: "contain",
            background: "transparent",
            position: "absolute",
            inset: 0,
          }}
        />
      </div>
      <div className="py-5" style={{ backgroundColor: "#fdc666" }}>
        {/* <CardHeader>
        <CardTitle className="capitalize">{name}</CardTitle>
      </CardHeader> */}
        <CardContent>
          <ul>
            <li className="capitalize pb-1">
              <strong>Name:</strong> {name}
            </li>
            <li className="pb-1">
              <strong>Type:</strong>{" "}
              {types.map((type: any) => type.type.name).join(", ")}
            </li>
            <li className="pb-1">
              <strong>Stats:</strong>{" "}
              {stats.map((stat: any) => stat.stat.name).join(", ")}
            </li>
            <li className="pb-1">
              <strong>Abilities:</strong>{" "}
              {abilities
                .slice(0, 5)
                .map((ability: any) => ability.ability.name)
                .join(", ")}
            </li>
            <li>
              <strong>Some Moves:</strong>{" "}
              {moves
                .slice(0, 5)
                .map((move: any) => move.move.name)
                .join(", ")}
            </li>
          </ul>
        </CardContent>
      </div>
    </Card>
  );
}

export default CardDetail;
