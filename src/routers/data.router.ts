const navMenu = [
	{
		label: 'SẢN PHẨM',
		name: 'product',
		childMenu: {
			isSuper: true,
			superItems: [
				{
					label: 'Áo',
					childItems: [
						{
							label: 'Áo Thun',
						},
						{
							label: 'Áo Bra',
						},
						{
							label: 'Áo Croptop',
						},
						{
							label: 'Áo Khoác',
						},
						{
							label: 'Sản Phẩm bán chạy',
						},
					],
				},
				{
					label: 'Quần',
					childItems: [
						{
							label: 'Quần Short & Váy',
						},
						{
							label: 'Quần Bó & Legging',
						},
						{
							label: 'Quần Dài',
						},
						{
							label: 'Quần Lót Thể Thao',
						},
						{
							label: 'Quần Jogger',
						},
					],
				},
				{
					label: 'Giày Dép',
					childItems: [
						{
							label: 'Giày Thể Thao',
						},
						{
							label: 'Giày Đinh',
						},
						{
							label: 'Xăng-đan & Dép',
						},
						{
							label: 'Tất',
						},
						{
							label: 'Bảo Vệ Gối',
						},
					],
				},
				{
					label: 'Đồ Bơi',
					childItems: [
						{
							label: 'Đồ Bơi Liền Mảnh',
						},
						{
							label: 'Bikini',
						},
						{
							label: 'Áo Bơi Chống Nắng',
						},
						{
							label: 'Quần Đi Biển',
						},
						{
							label: 'Wesuit',
						},
					],
				},
			],
		},
	},
	{
		label: 'BỘ SƯU TẬP',
		name: 'collection',
		childMenu: {
			isSuper: false,
			items: [
				{
					key: '1',
					label: 'Tập Gym',

					value: 'gym',
				},
				{
					key: '2',
					label: 'Tập Yoga',
				},
				{
					key: '3',
					label: 'Chạy Bộ',

					value: 'yoga',
				},
				{
					key: '4',
					label: 'Boxing',

					value: 'boxing',
				},
				{
					key: '5',
					label: 'Bơi Lội',

					value: 'swim',
				},
			],
		},
	},
	{
		label: 'PHỤ KIỆN',
		name: 'accessory',
		childMenu: {
			isSuper: false,
			items: [
				{
					key: '1',
					label: 'Balo & Túi',
				},
				{
					key: '2',
					label: 'Thảm Tập Yoga',
				},
				{
					key: '3',
					label: 'Khăn',
				},
				{
					label: 'Găng Tay',
				},
				{
					key: '4',
					label: 'Dây kháng lực',
				},
				{
					key: '5',
					label: 'Đai Bảo Vệ',
				},
			],
		},
	},
	{
		label: 'XU HƯỚNG',
		name: 'trend',
	},
	{
		label: 'KHUYẾN MÃI',
		name: 'promition',
		childMenu: {
			isSuper: false,
			items: [
				{
					key: '1',
					label: 'Flash Sale',
				},
				{
					key: '2',
					label: 'Black Friday',
				},
				{
					key: '3',
					label: 'Xmas',
				},
				{
					key: '4',
					label: 'One Page',
				},
			],
		},
	},
	{
		label: 'CHÍNH SÁCH',
		name: 'policy',
	},
	{
		label: 'LIÊN HỆ',
		name: 'contact',
	},
];

export default navMenu;
