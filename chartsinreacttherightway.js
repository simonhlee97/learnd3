
// https://github.com/sentisis/charts-in-react
// D3 Timing Functions

const duration = 1000;

const timeScale = scaleLinear()
	.domain([0, duration])
	.clamp(true);
	
const i = interpolateNumber(0, 4);

const t = timer((elapsed) => {
	const te = easeElasticOut(timeScale(elapsed), 4, 0.5);

	const radius = i(te);
	this.setState({ radius })

	if (elapsed > duration) return t.stop();
});



// d3.interpolateNumber(a, b) returns an interpolator between a and b



// Transition: the <Transition> component lets you describe a transition from one component state to another over time with a simple declarative API... 
// <TransitionGroup> component manages a set of <Transition> components in a list.  (package: react-transition-group)
<Transition 
	in 
	timeout = {DURATION}
	onEnter={this.handleEnter}
	{...others}
>
	<circle {...} />
</Transition>

// LineChart -> render
<TransitionGroup component="g" appear>
	{data.map((d, i) => (
		<Point 
			key = {i}
			{...}
		/>
	))}
</TransitionGroup>

