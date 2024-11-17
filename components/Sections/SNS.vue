<template>
  <div
    class="flex flex-col justify-start items-center h-96 bg-secundaryLighter"
  >
    <h2
      class="text-6xl h-1/6 font-primary text-sky-700 font-bolder tracking-widest"
    >
      Let's connect !
    </h2>

    <div class="flex flex-row flex-wrap justify-center items-center h-5/6">
      <NuxtLink to="https://www.facebook.com/" target="_blank"
        ><div class="blob1 hover:scale-110"><LogoFacebook class="" /></div
      ></NuxtLink>
      <NuxtLink to="https://www.instagram.com/" target="_blank"
        ><div class="blob2 hover:scale-110"><LogoInstagram class="" /></div
      ></NuxtLink>
      <NuxtLink to="https://line.me/en/" target="_blank"
        ><div class="blob6 hover:scale-110"><LogoLine class="" /></div
      ></NuxtLink>
      <NuxtLink to="https://www.linkedin.com/home" target="_blank"
        ><div class="blob4 hover:scale-110"><LogoLinkedIn class="mb-3" /></div
      ></NuxtLink>
      <NuxtLink to="https://www.snapchat.com/" target="_blank"
        ><div class="blob5 hover:scale-110"><LogoSnapchat class="" /></div
      ></NuxtLink>
      <NuxtLink to="https://www.tiktok.com/" target="_blank"
        ><div class="blob3 hover:scale-110"><LogoTikTok class="" /></div
      ></NuxtLink>
      <NuxtLink to="https://www.whatsapp.com/" target="_blank"
        ><div class="blob7 hover:scale-110"><LogoWhatsapp class="ml-2" /></div
      ></NuxtLink>
      <NuxtLink to="https://twitter.com/" target="_blank"
        ><div class="blob8 hover:scale-110"><LogoX class="ml-3" /></div
      ></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.blob1 {
  background: #3b5998;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M824 665.5Q691 831 492.5 844t-298-165.5Q95 500 192 317.5T515.5 108q226.5-27 334 182.5t-25.5 375Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M824 665.5Q691 831 492.5 844t-298-165.5Q95 500 192 317.5T515.5 108q226.5-27 334 182.5t-25.5 375Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  transition: all 0.5s;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M854 660.5q-98 160.5-279.5 235t-287.5-84Q181 653 127 473.5t121.5-243Q424 167 610.5 147t264 166.5Q952 500 854 660.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M854 660.5q-98 160.5-279.5 235t-287.5-84Q181 653 127 473.5t121.5-243Q424 167 610.5 147t264 166.5Q952 500 854 660.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  transition: all 0.5s;
}
.blob3 {
  background: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M736 726.5q-236 226.5-456 0t0-437q220-210.5 456 0t0 437Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M736 726.5q-236 226.5-456 0t0-437q220-210.5 456 0t0 437Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  transition: all 0.5s;
}
.blob4 {
  background: #0a66c2;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M745.5 693Q625 886 411.5 802.5T159 471.5q-39-247.5 222-328t373 138Q866 500 745.5 693Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M745.5 693Q625 886 411.5 802.5T159 471.5q-39-247.5 222-328t373 138Q866 500 745.5 693Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  transition: all 0.5s;
}
.blob5 {
  background: #fffc00;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M813.5 702Q631 904 410 815T183 496q-6-230 229.5-341T822 272q174 228-8.5 430Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M813.5 702Q631 904 410 815T183 496q-6-230 229.5-341T822 272q174 228-8.5 430Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  transition: all 0.5s;
}
.blob6 {
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M755.5 709Q636 918 389 839T161.5 514q19.5-246 250-348t347 116q116.5 218-3 427Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M755.5 709Q636 918 389 839T161.5 514q19.5-246 250-348t347 116q116.5 218-3 427Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  transition: all 0.5s;
}
.blob7 {
  background: #40c351;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M820 731Q650 962 412.5 849t-267-370.5Q116 221 384 126.5T821 266q169 234-1 465Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M820 731Q650 962 412.5 849t-267-370.5Q116 221 384 126.5T821 266q169 234-1 465Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  transition: all 0.5s;
}
.blob8 {
  background: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  --svg: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M811 735.5Q653 971 422 848T144.5 466.5Q98 208 367 144t435.5 146Q969 500 811 735.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M811 735.5Q653 971 422 848T144.5 466.5Q98 208 367 144t435.5 146Q969 500 811 735.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  transition: all 0.5s;
}
</style>
