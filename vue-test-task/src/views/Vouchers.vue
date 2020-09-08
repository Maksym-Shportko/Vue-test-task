<template>
  <section class="voucher-wrapper">
    <FilterFields/>
    <div class="container pl-0">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(item,index) in getVouchers" :key="index">
          <div class="card">
            <img :src="item.img" class="card-img-top" alt="..." />
            <div class="card-description position-relative">
              <span class="card-decoration">
                <svg
								@click="addToFavorite(item)"
                  width="23"
                  height="23"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
									stroke="#B7B7B7"
                >
                  <path
                    d="M15.4836 1.48538C13.5751 -0.386848 10.5328 -0.489899 8.5 1.18016C6.46802 -0.489112 3.42566
										-0.386848 1.51637 1.48538C0.538066 2.44509 0 3.72024 0 5.078C0 6.43576 0.538066 7.7117 1.51637 
										8.67062L7.59307 14.6318C7.84326 14.8773 8.17203 15 8.5 15C8.82797 15 9.15674 14.8773 9.40693 
										14.6318L15.4836 8.67062C16.4619 7.7117 17 6.43654 17 5.078C17 3.72024 16.4619 2.4443 15.4836 1.48538Z"
                    :fill="item.isFavorite ? '#349A89' : 'none' "
                  />
                </svg>
              </span>
              <span class="card-text">{{item.name}}</span>
              <h5 class="card-title pt-1">{{item.price}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import FilterFields from '../components/FilterFields'

export default {

  name: "Vouchers",

  components:{FilterFields},

  data: () => {

    return {
      isItemLicked: false,
    };

  },

  methods: {
    
    addToFavorite(item) {
			item.isFavorite =! item.isFavorite
			console.log(item.isFavorite);
    },

  },

  computed: {

    getVouchers() {
      return this.$store.getters.getAllVouchers;
    },
    
  },

};
</script>

<style lang="scss" scoped>
.voucher-wrapper {
  .container {
    width: 840px;
  }
  .card-img-top {
    max-width: 202px !important;
    height: 148px;
  }
  .card {
    width: 202px;
    padding: 2px;
    margin-bottom: 10px;
  }
  .card-description {
    padding: 5px 10px;
  }
  .card-text {
    font-family: Helvetica;
    font-size: 15px;
    line-height: 17px;
    color: #373738;
  }
  .card-title {
    font-family: Helvetica;
    font-size: 22px;
    font-weight: 600;
    line-height: 21px;
    color: #101010;
  }
  .card-decoration {
    position: absolute;
    right: 10px;
    bottom: 55px;
    background: #ffffff;
    border-radius: 50%;
    width: 40px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.163407);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
      cursor: pointer;
    }
  }
	.favorite {
		fill: #349A89;
	}
}
</style>