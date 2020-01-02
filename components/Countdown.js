import '../styles/main.css';

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const SVGCircle = ({radius}) => (
    <svg className='countdown-svg'>
        <path fill="none" stroke="#333" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)}/>
    </svg>
);

class Countdown extends React.Component {
    state = {
        years: undefined,
        months: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    // componentWillMount() {
    //     this.getTimeSince(this.props.deadline);
    // }

    componentDidMount() {
        this.interval = setInterval(() => {
            const {deadline} = this.props;
            const time = Date.parse(new Date()) - Date.parse(deadline);
            if (time < 0) {
                this.setState({
                    years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0
                });
            } else {
                const seconds = Math.floor((time / 1000) % 60);
                const minutes = Math.floor((time / 1000 / 60) % 60);
                const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
                const days = Math.floor(time / (1000 * 60 * 60 * 24) % 30);
                const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30) % 12);
                const years = Math.floor((time / (1000 * 60 * 60 * 24 * 30 * 12)) % 365);
                this.setState({years, months, days, hours, minutes, seconds});
            }
        }, 1000);
    }

    componentWillUnmount() {
        if(this.interval) {
            clearInterval(this.interval);
        }
    }

    leading0(num) {
        return num < 10 ? "0" + num : num;
    }

    getTimeSince(deadline) {
        const time = Date.parse(new Date()) - Date.parse(deadline);
        if (time < 0) {
            this.setState({
                years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0
            });
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24) % 30);
            const months = Math.floor(time / (1000 * 60 * 60 * 24 * 30) % 12);
            const years = Math.floor((time / (1000 * 60 * 60 * 24 * 30 * 12)) % 365);
            this.setState({years, months, days, hours, minutes, seconds});
        }
    }

    render() {
        const {years, months, days, hours, minutes, seconds} = this.state;
        const yearsRadius = mapNumber(years, 0, 365, 0, 360);
        const monthsRadius = mapNumber(months, 0, 12, 0, 360);
        const daysRadius = mapNumber(days, 0, 30, 0, 360);
        const hoursRadius = mapNumber(hours, 0, 24, 0, 360);
        const minutesRadius = mapNumber(minutes, 0, 60, 0, 360);
        const secondsRadius = mapNumber(seconds, 0, 60, 0, 360);

        if (!seconds) {
            return null;
        }

        console.log(months, years);

        return (
            <div>
                <div className='countdown-wrapper'>
                    {years && (
                        <div className='countdown-item'>
                            <SVGCircle radius={yearsRadius}/>
                            {this.leading0(this.state.years)}
                            <span>years</span>
                        </div>
                    )}
                    {months && (
                        <div className='countdown-item'>
                            <SVGCircle radius={monthsRadius}/>
                            {this.leading0(this.state.months)}
                            <span>months</span>
                        </div>
                    )}
                    {days && (
                        <div className='countdown-item'>
                            <SVGCircle radius={daysRadius}/>
                            {this.leading0(this.state.days)}
                            <span>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className='countdown-item'>
                            <SVGCircle radius={hoursRadius}/>
                            {this.leading0(this.state.hours)}
                            <span>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className='countdown-item'>
                            <SVGCircle radius={minutesRadius}/>
                            {this.leading0(this.state.minutes)}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className='countdown-item'>
                            <SVGCircle radius={secondsRadius}/>
                            {this.leading0(this.state.seconds)}
                            <span>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Countdown;