export interface Tool {
  slug: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  category: string;
  categoryKo: string;
  icon: string;
  keywords: string[];
}

export const tools: Tool[] = [
  {
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    nameKo: "JSON 포맷터 & 검증기",
    description:
      "Format, validate, and minify JSON data instantly. Beautify JSON with syntax highlighting and error detection.",
    descriptionKo:
      "JSON 데이터를 실시간으로 포맷팅, 검증, 압축합니다. 구문 강조와 오류 감지를 지원합니다.",
    category: "Formatters",
    categoryKo: "포매터",
    icon: "{ }",
    keywords: [
      "json formatter",
      "json beautifier",
      "json validator",
      "json formatter online",
    ],
  },
  {
    slug: "base64",
    name: "Base64 Encoder / Decoder",
    nameKo: "Base64 인코더 / 디코더",
    description:
      "Encode and decode Base64 strings online. Supports text and file conversion with instant results.",
    descriptionKo:
      "Base64 문자열을 온라인으로 인코딩 및 디코딩합니다. 텍스트와 파일 변환을 지원합니다.",
    category: "Encoders",
    categoryKo: "인코더",
    icon: "B64",
    keywords: ["base64 decode", "base64 encode", "base64 decoder online"],
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    nameKo: "UUID 생성기",
    description:
      "Generate UUIDs (v4) instantly. Bulk generate up to 100 UUIDs with customizable format options.",
    descriptionKo:
      "UUID(v4)를 즉시 생성합니다. 최대 100개까지 대량 생성을 지원합니다.",
    category: "Generators",
    categoryKo: "생성기",
    icon: "#",
    keywords: [
      "uuid generator",
      "uuid v4 generator",
      "bulk uuid generator",
      "guid generator",
    ],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(): Record<string, Tool[]> {
  return tools.reduce(
    (acc, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    },
    {} as Record<string, Tool[]>
  );
}
