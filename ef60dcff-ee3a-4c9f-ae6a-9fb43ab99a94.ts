export default {
  entity: {
    id: 'ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94',
    name: '彻底批判牛发和推行“四人帮”反革命政治纲领、大搞篡党夺权阴谋活动的罪行',
    internal: false,
    type: 'img',
    official: false,
    author: '来秉良',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94/8.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '彻底批判牛发和推行“四人帮”反革命政治纲领、大搞篡党夺权阴谋活动的罪行',
        authors: [
          '来秉良',
        ],
        page_start: 1,
        page_end: 8,
        dates: [
          {
            year: 1977,
            month: 12,
            day: 26,
          },
        ],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: 'ef60dcff-ee3a-4c9f-ae6a-9fb43ab99a94',
  resource_type: 'book',
  version: 2,
};