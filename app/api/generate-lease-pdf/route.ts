import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
// Type for validated lease data
interface ValidatedLeaseData {
  [key: string]: string | boolean | number;
}

function validateAndNormalizeFormData(rawData: Record<string, any>): ValidatedLeaseData {
  const normalized: ValidatedLeaseData = {};
  
  // Process each field
  for (const [key, value] of Object.entries(rawData)) {
    // Convert switch fields to booleans
    if (key.startsWith('customerOfRecord_') || key.startsWith('chargedToTenant_')) {
      normalized[key] = value === 'on';
    }
    // Keep other fields as-is
    else {
      normalized[key] = value;
    }
  }
  
  return normalized;
}

// export async function POST(request: NextRequest) {
//   try {
//     const rawFormData = await request.json();

//     // TODO: Add authentication check here when Supabase Auth is implemented
//     // const session = await getServerSession();
//     // if (!session) {
//     //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     // }

//     // Validate and normalize the data
//     const validatedData = validateAndNormalizeFormData(rawFormData);
    
//     console.log('Validated data:', validatedData);

//     // Fill the PDF with validated data
//     const pdfBytes = await fillLeasePDF(validatedData);

//     return new NextResponse(pdfBytes, {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': `attachment; filename="lease-agreement-${Date.now()}.pdf"`,
//       },
//     });
//   } catch (error) {
//     console.error('Error generating lease PDF:', error);
//     return NextResponse.json(
//       { 
//         error: 'Failed to generate PDF',
//         message: error instanceof Error ? error.message : 'Unknown error'
//       },
//       { status: 500 }
//     );
//   }
// }