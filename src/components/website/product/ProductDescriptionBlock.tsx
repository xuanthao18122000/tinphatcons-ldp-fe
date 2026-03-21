import React from "react";

interface ProductDescriptionBlockProps {
  descriptionHtml?: string | null;
  title?: string;
}

export default function ProductDescriptionBlock({
  descriptionHtml,
  title = "Chi tiết sản phẩm",
}: ProductDescriptionBlockProps) {
  if (!descriptionHtml) return null;

  return (
    <div className="mt-6 p-4 lg:p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase border-b pb-3">
        {title}
      </h2>
      <div
        className="content-editor text-base text-gray-700 leading-[1.65]
                    /* Style cho Thẻ Tiêu đề */
                    [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-blue-900 [&_h2]:mt-8 [&_h2]:mb-3
                    [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-5 [&_h3]:mb-3

                    /* Căn giữa hình từ TextEditor */
                    [&_img]:mx-auto [&_img]:block [&_img]:max-w-full
                    [&_figure]:mx-auto [&_figure]:text-center
                    [&_.aligncenter]:mx-auto [&_.aligncenter]:block
                    [&_.wp-caption]:text-center [&_.wp-caption]:mx-auto
                    
                    /* Style cho Thẻ p */
                    [&_p]:mb-4 [&_p]:text-justify
                    
                    /* Style cho Danh sách (ul, ol, li) */
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul_li]:mb-2
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol_li]:mb-2
                    
                    /* Style cho Bảng (Table - giống WooCommerce) */
                    [&_table]:w-full [&_table]:border-collapse [&_table]:my-4 [&_table]:text-[14px]
                    [&_table_td]:p-2 [&_table_td]:border [&_table_td]:border-gray-200 [&_table_td]:align-middle
                    [&_table_th]:p-2 [&_table_th]:border [&_table_th]:border-gray-200 [&_table_th]:bg-gray-100 [&_table_th]:font-semibold
                    
                    /* Nhấn nhá cột đầu tiên (Cột Tên Thông số) */
                    [&_table_td:first-child]:font-semibold [&_table_td:first-child]:text-gray-900 [&_table_td:first-child]:w-1/3 [&_table_td:first-child]:bg-gray-50
                    
                    /* Style xen kẽ dòng chẵn lẻ cho dễ nhìn (Zebra Stripes) */
                    [&_table_tr:nth-child(even)_td]:bg-gray-50/50
                    
                    /* Style cho Link & Chữ in đậm */
                    [&_a]:text-blue-600 [&_a]:hover:text-blue-800 [&_a]:underline
                    [&_strong]:font-bold [&_strong]:text-gray-900
                    [&_b]:font-bold [&_b]:text-gray-900
                  "
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />
    </div>
  );
}

