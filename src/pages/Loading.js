import { CircularProgress } from '@mui/material';

const Loading = () => {
	return (
		<div className="loading-container">
			<CircularProgress color="primary" size="4rem" />
		</div>
	);
};

export default Loading;
