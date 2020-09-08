export default {
	state: {
		voucher:[
			{
				name:'Item name',
				isFavorite:false,
				price:'$264',
				img:'Mask.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$500',
				img:'Mask2.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$2345',
				img:'Mask3.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$567',
				img:'Mask4.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$234',
				img:'Mask5.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$809',
				img:'Mask6.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$678',
				img:'Mask7.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$456',
				img:'Mask8.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$986',
				img:'Mask9.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$275',
				img:'Mask10.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$190',
				img:'Mask11.svg'
			},
			{
				name:'Item name',
				isFavorite:false,
				price:'$287',
				img:'Mask12.svg'
			},
		]
	},
	getters: {
		getAllVouchers(state) {
			return state.voucher
		}
	}
}