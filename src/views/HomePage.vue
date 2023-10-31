<template>
  <div class="sky">
    <div class="logoPage">
      <div class="header-container">
        <div class="header-menu" @click="toggleNav">
          <div class="hambergerIcon" :class="{ open: open }"></div>
        </div>

        <div
          class="homeNav"
          @click="toggleNav"
          :class="{ showHomeNav: showHomeNav }"
        >
          <ul>
            <span>(B/G)</span>
            <li>
              <router-link to="" class="mrt">
                <p>SERVICE</p>
              </router-link>
            </li>
            <li>
              <router-link to="" class="team">
                <p>TEAM</p>
              </router-link>
            </li>
            <li>
              <router-link to="" class="contact">
                <p>CONTACT</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <h1 class="logo">(B/G)</h1>
      <span class="scrollBtn">SCROLL</span>
      <div class="line"></div>
    </div>

    <div class="scrollArea">
      <div class="navbar">
        <span class="logo">(B/G)</span>
        <ul class="nav">
          <li>SERVICE</li>
          <li>SHOWREEL</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div class="servicePage">
        <div class="title">
          <h2>SERVICE</h2>
          <span>Lorem ipsum dolor sit.</span>
        </div>

        <div class="aboutService">
          <div class="block">
            <div class="txtArea">
              <div class="s-title">
                <h4>Lorem ipsum amet.</h4>
              </div>
              <p class="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              </p>
            </div>

            <img src="https://picsum.photos/200/200/?random=10" />
          </div>
          <div class="block">
            <div class="txtArea">
              <div class="s-title">
                <h4>Lorem ipsum amet.</h4>
              </div>
              <p class="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              </p>
            </div>

            <img src="https://picsum.photos/200/200/?random=11" />
          </div>
          <div class="block">
            <div class="txtArea">
              <div class="s-title">
                <h4>Lorem ipsum amet.</h4>
              </div>
              <p class="txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              </p>
            </div>

            <img src="https://picsum.photos/200/200/?random=12" />
          </div>
        </div>
      </div>

      <div class="showreelPage">
        <div class="title">
          <h2>SHOWREEL</h2>
          <span>Lorem ipsum dolor sit.</span>
        </div>

        <div class="showreelRWD">
          <div>
            <img src="https://picsum.photos/300/200/?random=10" />
          </div>
          <div>
            <img src="https://picsum.photos/300/200/?random=10" />
          </div>
          <div>
            <img src="https://picsum.photos/300/200/?random=10" />
          </div>
        </div>

        <div class="swiperArea">
          <swiper
            :slides-per-view="3"
            :spaceBetween="-50"
            :centeredSlides="true"
            :navigation="true"
            :loop="true"
            :modules="modules"
          >
            <swiper-slide>
              <img src="https://picsum.photos/300/200/?random=10" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://picsum.photos/300/200/?random=10" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://picsum.photos/300/200/?random=10" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://picsum.photos/300/200/?random=10" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://picsum.photos/300/200/?random=10" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://picsum.photos/300/200/?random=10" />
            </swiper-slide>
          </swiper>
        </div>

        <div class="more">more</div>
      </div>

      <div class="teamPage">
        <div class="title">
          <h2>TEAM</h2>
          <span>Lorem ipsum dolor sit.</span>
        </div>

        <div class="card">
          <div class="teamBlock">
            <h3>Lorem, ipsum dolor.</h3>
            <img src="https://picsum.photos/100/100/?random=10" />
            <div class="txt">
              <h4>Lorem ipsum dolor sit.</h4>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, commodi!</span
              >
            </div>
          </div>
          <div class="teamBlock">
            <h3>Lorem, ipsum dolor.</h3>
            <img src="https://picsum.photos/100/100/?random=10" />
            <div class="txt">
              <h4>Lorem ipsum dolor sit.</h4>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, commodi!</span
              >
            </div>
          </div>
          <div class="teamBlock">
            <h3>Lorem, ipsum dolor.</h3>
            <img src="https://picsum.photos/100/100/?random=10" />
            <div class="txt">
              <h4>Lorem ipsum dolor sit.</h4>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, commodi!</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contactPage">
    <div class="lightPink">
      <div class="contactUs">
        <h2>CONCACT</h2>
        <p>Lorem ipsum dolor sit.</p>
        <div class="contactTel">
          <div class="phoneNum">
            <i class="fa-solid fa-phone fa-xl"></i>
            <h3>+886-2-4563-1567</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores.
          </p>
        </div>

        <span>(B/G)</span>
      </div>
    </div>
    <div class="brown">
      <div class="inputArea">
        <label for="name">姓名:</label>
        <br />
        <input type="text" id="name" />
        <br />
        <label for="mail">EMAIL:</label>
        <br />
        <input type="email" id="mail" />
        <br />
        <label for="tel">電話:</label>
        <br />
        <input type="text" id="tel" />
        <br />
        <label for="">需求說明:</label>
        <br />
        <textarea name="require" id="require" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper/modules";

export default {
  data() {
    return {
      open: false,
      showHomeNav: false,
    };
  },

  watch: {},

  methods: {
    toggleNav() {
      this.open = !this.open;
      this.showHomeNav = !this.showHomeNav;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/page/HomePage.scss";

.swiper-button-prev,
.swiper-button-next {
  color: #fff !important;
}
</style>
