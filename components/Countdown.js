import '../styles/main.css';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentWillUnmount() {
        this.getTimeSince(this.props.dateTogether);
    }

    componentDidMount() {
        setInterval(() => this.getTimeSince(this.props.dateTogether), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeSince(dateTogether) {
        const time = Date.parse(new Date()) - Date.parse(dateTogether);

        if (time < 0)
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
        else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({days, hours, minutes, seconds});
        }
    }

    render() {

        return (
            <div id='normal-countdown'>
                <div className="time-sec">
                    <h3 className="main-time">{this.leading0(this.state.days)}</h3> <span>Days</span>
                </div>
                <div className="time-sec">
                    <h3 className="main-time">{this.leading0(this.state.hours)}</h3> <span>Hours</span>
                </div>
                <div className="time-sec">
                    <h3 className="main-time">{this.leading0(this.state.minutes)}</h3> <span>Mins</span>
                </div>
                <div className="time-sec">
                    <h3 className="main-time">{this.leading0(this.state.seconds)}</h3> <span>Secs</span>
                </div>
            </div>
        );
    }
}

export default Countdown;