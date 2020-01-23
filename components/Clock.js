import Countdown from "./Countdown";

class Clock extends React.Component {

    state = {
        dateTogether: 'Oct, 20, 2018'
    };

    render() {
        return (
            <div className="text-uppercase">
                {/*<h1 className="font-weight-light">Time passed since we've been together.</h1>*/}
                <Countdown dateTogether={this.state.dateTogether} />
            </div>
        )
    }
}

export default Clock;