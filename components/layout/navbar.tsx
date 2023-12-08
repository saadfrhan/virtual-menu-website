"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const [toggleSearch, setToggleSearch] = useState(false)
  return (<>
    <div className="bg-primary flex justify-between text-white max-[810px]:rounded-none rounded-3xl px-10 py-5 max-[810px]:px-5 max-[810px]:py-2.5 max-[810px]:flex-col drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b duration-300 from-neutral-950/90 to-neutral-800/90 lg:bg-gradient-to-br border">
        <h1 className="font-raleway text-2xl max-[331px]:text-xl font-semibold leading-loose">
          Ahmed Shah Lassi Center
        </h1>
        <div className="flex justify-end font-nunitosans items-center">
          <Button className="min-[810px]:text-xl min-[810px]:font-semibold bg-transparent hover:bg-transparent">HOME</Button>
          <Button className="min-[810px]:text-xl min-[810px]:font-semibold bg-transparent hover:bg-transparent">MENU</Button>
          <Button className="min-[810px]:text-xl min-[810px]:font-semibold bg-transparent hover:bg-transparent">CONTACT</Button>
					<Button size="icon" className="bg-transparent hover:bg-transparent" onClick={() => setToggleSearch(!toggleSearch)}>
						<Search />
					</Button>
        </div>
      
    </div>
		{toggleSearch && <div className="flex max-[810px]:justify-center justify-end items-center w-full px-3 py-1">
		<div className="rounded-full items-end justify-end flex w-full max-w-2xl border-2 border-primary p-1 max-[810px]:max-w-auto">
        <Input className="m-0 bg-transparent border-none font-sans italic text-base" placeholder="Search..." />{" "}
        <Button size="icon" className="rounded-full">
          <Search />
        </Button>
      </div>
		</div>}
		</>
  );
}
