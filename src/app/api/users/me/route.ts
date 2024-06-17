import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import {NextRequest, NextResponse} from "next/server";
import {sendEmail} from "@/helpers/mailer";
import {getDataFromToken} from "@/helpers/detDataFromToken";
connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({_id: userId}).select("-password");
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 400});
  }
}
