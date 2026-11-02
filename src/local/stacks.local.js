import JsLogo from "../assets/icons/javascript.logo.svg";
import PyLogo from "../assets/icons/python.logo.svg";
import PhpLogo from "../assets/icons/php.logo.svg";

const languages = [
  {
    id: 1,
    logo: JsLogo,
    name: "JavaScript",
    description:
      "Bahasa pemrogaman paling populer didunia dan dipakai debanyak lini industri program.",
    sort_order: 1,
    is_featured: true,
  },
  {
    id: 2,
    logo: PyLogo,
    name: "Python",
    description:
      "Bahasa pemrogaman paling populer didunia dan dipakai debanyak lini industri program.",
    sort_order: 2,
    is_featured: true,
  },
  {
    id: 3,
    logo: PhpLogo,
    name: "PHP",
    description:
      "Bahasa pemrogaman paling populer didunia dan dipakai debanyak lini industri program.",
    sort_order: 2,
    is_featured: true,
  },
];

export const languagesData = () => ({
  data: languages,
  total: languages.length,
});
