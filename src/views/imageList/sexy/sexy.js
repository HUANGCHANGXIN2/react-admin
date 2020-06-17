import React, { Component } from 'react';

class sexy extends Component {
    constructor(props){
        super(props)
        this.state={
            imgList:[
        "https://img4.tuwandata.com/v4/thumb/jpg/uvW4YHhTWHFg5hLXQKaxvsLUTaSk4Chm1i1ezzRqavU/u/GLDM9lMIBglnFv7YKftLBGnfaEUsoci51D4kjaSTxpSd6uYNwKwK0Xe9jN4jX2nDjnPY0qcSQP1AllESiG29QQ0G01Yd10ZT9bWvxeczpnW7.jpg",
        "https://img4.tuwandata.com/v4/thumb/jpg/VWexTxYYdr5xRjZsCTgDivmMAaknsazfvZUmZp0Y1hM/u/GLDM9lMIBglnFv7YKftLBGnfaEUsoci51D4kjaSTxpScKHytcDozd7CJin2Jt1ZVmmloMpNqZaiSpStaJ54gs9EQksc9mJO9fj4tmSOyQ0G7.jpg",

        "https://img4.tuwandata.com/  v4  /thumb /jpg /oxITIw8ofpXEnq6eej2zXG1OmQ0W796HEgwJjwUEIi2 /u /GLDM9lMIBglnFv7YKftLBGnfaEUsoci51D4kjaSTxpS cKHytcDozd7CJin2Jt1ZVmmloMpNqZaiSpStaJ54gs9EQksc9mJO9fj4tmSOyQ0G7.jpg",
        "https://img4.tuwandata.com/  v4  /thumb /jpg /TkkJrNkuGnPNxHLDkihiNyQCSCL9HqTCuVeOC7CEiEq /u /GLDM9lMIBglnFv7YKftLBGnfaEUsoci51D4kjaSTxpS d6uYNwKwK0Xe9jN4jX2nDjnPY0qcSQP1AllESiG29QQ0G01Yd10ZT9bWvxeczpnW7.jpg",
            ]  
        }
    }
    render() { 
        const {imgList} = this.state
        return ( 
            <div>
                {
                    imgList.map(item => <img src={item}/>)
                }
            </div>
         );
    }
}
 
export default sexy;