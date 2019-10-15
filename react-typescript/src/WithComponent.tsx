import React from "react";
import axios from "axios";

function withHasMounted(InputComponent: any) {
    interface OutputProps { }
    interface OutputState {
        hasMounted: boolean;
    }
    return class OutputComponent extends React.Component<OutputProps, OutputState> {
        constructor(props:OutputProps) {
            super(props);
            this.state = {
                hasMounted: false
            };
        }
        componentDidMount() {
            this.setState({ hasMounted: true });
        }
        render() {
            const { hasMounted } = this.state;
            return <InputComponent {...this.state} hasMounted={hasMounted} />
        }
    }
}

function withDebug(InputComponent: any) {
    return class OutputComponent extends InputComponent {
        render() {
            return (
                <React.Fragment>
                    <p>props: {JSON.stringify(this.prpos)}</p>
                    <p>state.: {JSON.stringify(this.state)}</p>
                    {super.render()}
                </React.Fragment>
            )
        }
    }
}

interface MountEventProps {
    name: string,
    children: any
}
class MountEvent extends React.Component<MountEventProps> {
    componentDidMount() {
        const { name } = this.props;
    }
    render() {
        const { children } = this.props;
        return children();
    }
}
function My1Component() {
    return(
        <MountEvent name="My1Component">{() => <div>{/* 뭐지 */}</div>}</MountEvent>
        // <MountEvent name="My1Component" render={() => <div>{/* 뭐지 */}</div>} />
    )
}

interface DataFetcherProps {
    url: string;
    parseData: any;
    children: any;
}
interface DataFetcherState {
    data: any;
}
class DataFetcher extends React.Component<DataFetcherProps, DataFetcherState> {
    constructor(props: DataFetcherProps) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        const { url, parseData } = this.props;
        axios(url).then(response => {
            const data = parseData(response.data);
            this.setState({data});
        });
    }
    render() {
        const { children } = this.props;
        const { data } =this.state;
        if (data == null) {
            return <p>데이터 로딩 중....</p>;
        } else {
            return children({data});
        }
    }
}
// function My2Component() {
//     return (
//         <DataFetcher
//             url=""
//             parseData={parseRepoData}
//         >
//         {({data}) => (
//             <div>
//                 <p>{`name: ${data.name}`}</p>
//                 <p>{`stars: ${data.stars}`}</p>
//                 <p>{`open issues: ${data.openIssues}`}</p>
//             </div>
//         )}
//         </DataFetcher>
//     )
// }

function parseRepoData(data:any) {
    return {
        name: data.name,
        stars: data.stargazers_count,
        openIssues: data.open_issues,
    };
}

//export default MyComponent;