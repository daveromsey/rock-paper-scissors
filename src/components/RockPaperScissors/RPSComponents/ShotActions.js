import ShootButton from './ShootButton';

const ShotActions = () => {
	return (
		<section className="shot-actions pt-2 xs:pt-8 grid grid-cols-3 gap-4 sm:gap-8 items-center max-w-2xl mx-auto">
			<ShootButton shot="rock" />
			<ShootButton shot="paper" />
			<ShootButton shot="scissors" />
		</section>
  )
}

export default ShotActions;
