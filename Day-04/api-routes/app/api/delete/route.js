import { NextResponse } from "next/server";

export async function DELETE(request) {
    let data = await request.json();
    console.log("Delete request received:", data);

    // Example: delete by name (aap DB ya file logic laga sakte ho)
    return NextResponse.json({ success: true, message: `${data.name} deleted` });
}
