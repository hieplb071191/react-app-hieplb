import { useState } from 'react';
import styleAnimation from '../../styles/scss/anomation.module.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

type HomeCauroselProps = {
	images: string[];
	handleNavigate: () => void;
};

const HomeCaurosel = (props: HomeCauroselProps) => {
	const { images, handleNavigate } = props;
	const [imgDisplay, setImgDisplay] = useState(0);
	return (
		<div>
			<div className={styleAnimation.homeCaurosel}>
				{images.map((item, index) => {
					return (
						index == imgDisplay && (
							<div className={styleAnimation.image} style={{ zIndex: 1 }} key={index}>
								<img src={item} />
							</div>
						)
					);
				})}
				<div
					className={styleAnimation.leftButton}
					style={{
						zIndex: 2,
						position: 'absolute',
						top: '50%',
						cursor: 'pointer',
						pointerEvents: imgDisplay > 0 ? 'auto' : 'none',
					}}
					onClick={() =>
						setImgDisplay((prev) => {
							if (prev) {
								prev -= 1;
							}
							return prev;
						})
					}
				>
					<div style={{ position: 'absolute', top: '12px', left: '40%' }}>
						<LeftOutlined style={{ fontSize: '20px' }} />
					</div>
				</div>
				<div
					className={styleAnimation.rightButton}
					style={{
						zIndex: 2,
						position: 'absolute',
						top: '50%',
						right: '0px',
						cursor: 'pointer',
						pointerEvents: imgDisplay < images.length - 1 ? 'auto' : 'none',
					}}
					onClick={() =>
						setImgDisplay((prev) => {
							if (prev < images.length - 1) {
								prev += 1;
							}
							return prev;
						})
					}
				>
					<div style={{ position: 'absolute', top: '12px', right: '40%' }}>
						<RightOutlined style={{ fontSize: '20px' }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeCaurosel;
