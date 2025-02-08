<template>
  <footer id="contacts">
    <p class="section-header font-tertiary">{{ title[lang] }}</p>
    <NuxtImg
      class="drawing"
      src="/img/drawingme.webp"
      alt="Drawing of Florian Budniewski"
      loading="lazy"
    />
    <div class="text">
      <p class="content">" {{ text[lang] }} "</p>
      <p class="name">Florian Budniewski</p>
    </div>
    <div class="list-blobs">
      <NuxtLink to="https://github.com/Fly0w" target="_blank" class="blob blob1"
        ><img src="/icons/github.svg" alt="GitHub logo" class="logo"
      /></NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/florian_budniewski/"
        target="_blank"
        class="blob blob2"
      >
        <img src="/icons/instagram.svg" alt="Instagram logo" class="logo"
      /></NuxtLink>
      <NuxtLink
        to="https://line.me/ti/p/b5CM9fnHGz"
        target="_blank"
        class="blob blob6"
        ><img src="/icons/line.svg" alt="Line logo" class="logo"
      /></NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/florian-budniewski/"
        target="_blank"
        class="blob blob4"
        ><img src="/icons/linkedin.svg" alt="LinkedIn logo" class="logo"
      /></NuxtLink>

      <NuxtLink
        to="mailto:florian.budniewski@hotmail.com"
        target="_blank"
        class="blob blob8"
        ><img src="/icons/email.svg" alt="Email logo" class="logo"
      /></NuxtLink>
    </div>
  </footer>
</template>

<script setup>
const lang = useState("lang");
const title = {
  fr: "Contacts",
  en: "Contacts",
  ja: "連絡",
};

const text = {
  fr: "Je suis impatient et excité à l'idée de travailler sur de nouveaux projets au sein d'une équipe qui partage des valeurs communes. Ensemble, donnons le meilleur de nous-mêmes !",
  en: "I am looking forward to working on exciting new projects, and be part of a team that shares common values. Together, let's do our best !",
  ja: "エキサイティングな新しいプロジェクトに取り組み、共通の価値観を持つチームの一員となることを楽しみにしています。一緒に、ベストを尽くしましょう！",
};
</script>

<style lang="scss" scoped>
footer {
  padding-block: 50px;
  color: black;
  background: linear-gradient(270deg, #1a1a1a, #000);
  color: var(--neutral);
  padding-inline: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;

  .drawing {
    clip-path: circle();
    height: 220px;
    margin: 0 50px;
    width: auto;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Cormorant Garamond, serif;
    width: 60%;
    .content {
      font-size: 30px;
      font-style: italic;
    }

    .name {
      width: 100%;
      text-align: end;
    }
  }
}

.list-blobs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.blob {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  .logo {
    height: 60px;
    width: 60px;
  }
}

.blob1 {
  background: #242938;

  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M824 665.5Q691 831 492.5 844t-298-165.5Q95 500 192 317.5T515.5 108q226.5-27 334 182.5t-25.5 375Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M824 665.5Q691 831 492.5 844t-298-165.5Q95 500 192 317.5T515.5 108q226.5-27 334 182.5t-25.5 375Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
}
.blob2 {
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );

  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M854 660.5q-98 160.5-279.5 235t-287.5-84Q181 653 127 473.5t121.5-243Q424 167 610.5 147t264 166.5Q952 500 854 660.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M854 660.5q-98 160.5-279.5 235t-287.5-84Q181 653 127 473.5t121.5-243Q424 167 610.5 147t264 166.5Q952 500 854 660.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
}
.blob4 {
  background: #0a66c2;

  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M745.5 693Q625 886 411.5 802.5T159 471.5q-39-247.5 222-328t373 138Q866 500 745.5 693Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M745.5 693Q625 886 411.5 802.5T159 471.5q-39-247.5 222-328t373 138Q866 500 745.5 693Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
}
.blob6 {
  background: #00b900;

  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M755.5 709Q636 918 389 839T161.5 514q19.5-246 250-348t347 116q116.5 218-3 427Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M755.5 709Q636 918 389 839T161.5 514q19.5-246 250-348t347 116q116.5 218-3 427Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
}
.blob8 {
  background: rgb(194, 151, 33);

  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M811 735.5Q653 971 422 848T144.5 466.5Q98 208 367 144t435.5 146Q969 500 811 735.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M811 735.5Q653 971 422 848T144.5 466.5Q98 208 367 144t435.5 146Q969 500 811 735.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
}

@media screen and (max-width: 1024px) {
  .blob {
    width: 110px;
    height: 110px;

    &:hover {
      transform: none;
    }

    .logo {
      height: 50px;
      width: 50px;
    }
  }

  footer {
    padding-block: 1rem;
    padding-inline: 2rem;

    .drawing {
      height: 160px;
    }

    .text {
      width: 80%;
      .content {
        font-size: 25px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .list-blobs {
    gap: 10px;
  }

  .blob {
    width: 80px;
    height: 80px;

    .logo {
      height: 30px;
      width: 30px;
    }
  }

  footer {
    gap: 10px;

    .drawing {
      height: 130px;
    }

    .text {
      .content {
        font-size: 20px;
      }
    }
  }
}
</style>
