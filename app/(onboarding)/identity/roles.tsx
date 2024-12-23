
"use client";
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { redirect } from 'next/navigation';


export  function Roles() {
  const designations = ["Student", "Researcher", "Clinician", "Educator", "Professional", "Other"];
  const [selected, setSelected] = useState<string[]>([]);

  interface ToggleSelectionProps {
    designation: string;
  }

  const toggleSelection = ({ designation }: ToggleSelectionProps) => {
    setSelected((prev: string[]) =>
      prev.includes(designation)
        ? prev.filter((item) => item !== designation) // Remove if already selected
        : [...prev, designation] // Add if not selected
    );
  };

  const handleSubmit = () => {
    console.log("Selected designations:", selected);
    // BACKEND - send the selected designations to database

    redirect('/keywords');
  };

  return (
    <main>
    <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h1 className="text-3xl font-bold text-black sm:text-4xl">
                What brings you to Astra?
              </h1>
              <p className="mt-4 text-base text-gray-700">
                Select as many as apply.
              </p>
            </div>
          </div>
        </div>
    </section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
            {designations.map((designation) => (
            <Button
                className={`${selected.includes(designation) ? 'bg-gray-400 hover:bg-black border border-gray-500' : 'bg-black hover:bg-gray-400 border-gray-500'} text-black rounded-full text-xl px-10 py-5 inline-flex items-center justify-center`}
                key={designation}
                onClick={() => toggleSelection({ designation })}
                variant={selected.includes(designation) ? "default" : "outline"}
            >
                {designation}
            </Button>
            ))}
        </div>
        <div className = 'flex justify-end py-5'>
        <Button onClick={handleSubmit} className="mt-4 bg-black text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-500 transition duration-300">
          Submit
        </Button>
        </div>
    </div>

    </main>
  );
}