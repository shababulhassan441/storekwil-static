import { createNewUserRegistration } from "@/lib/actions";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const formData = await req.formData();

    // Call the registration logic with the form data
    const result = await createNewUserRegistration(formData);

    if (result.type === "success") {
      return NextResponse.json(
        { message: result.message, type: result.type, regType: result.regType },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: result.message, type: result.type },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in registration API:", error);
    return NextResponse.json(
      { message: "Internal Server Error", type: "error" },
      { status: 500 }
    );
  }
}