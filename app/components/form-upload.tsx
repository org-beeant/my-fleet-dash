"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Button } from "./ui/button";

import { useToast } from "../hooks/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@remix-run/react";
import { Label } from "./ui/label";

/* const FormSchema = z.object({
  // fileupload: z.instanceof(FileList).optional(),
 
  fileupload: z
    .array(z.custom<File>())
    .min(1, "Please select at least one file")
    .refine((files) => files.every((file) => file.size <= 100 * 1024 * 1024), {
      message: "File size must be less than 100MB",
      path: ["files"],
    }),
  outputTemplate: z.string().min(1, { message: "Output Template is Required" }),
  inputTemplate: z.string().min(1, { message: "Input Template is Required" }),
}); */

//type schemaType = z.infer<typeof FormSchema>;

function MyContent({ title }: { title: string }) {
  const { toast } = useToast();

  // Initialize the form with react-hook-form and zod
  /*   const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  }); */

  //Function to handle form submission
  function onSubmit(data: any) {
    console.log("I am here", data);
    toast({
      title: "Data to Upload",
      description: JSON.stringify(data),
    });
    // Handle the form submission logic here
  }

  function handleReload() {
    window.location.reload();
  }

  return (
    <>
      <Card className="flex-1 h-[300px]">
        <Form>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="truncate">Vadidate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">RC Number</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center overflow-auto">
            <div className="flex flex-row justify-between items-center gap-4">
              <Button className="flex-1 bg-mytheme" type="submit">
                Upload
              </Button>
              <Button className="flex-1 bg-mytheme" onClick={handleReload}>
                Cancel
              </Button>
            </div>
          </CardFooter>
        </Form>
      </Card>
      <Card className="flex-1 h-[300px]">
        <CardHeader>
          <CardTitle>Status</CardTitle>
          <CardDescription className="truncate">
            Stauts of the upload process will be shown here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-gray-300 p-4 min-h-[180px]">
            <p className="text-gray-700">Your Response will be shown here.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center"></CardFooter>
      </Card>
    </>
  );
}

export function MyUpload({ title }: { title: string }) {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 lg:grid-cols-2">
      <MyContent title={title} />
    </div>
  );
}
