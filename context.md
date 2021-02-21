# Quick setup of React.js Context

Create a new file for the context.



```
import React, { useState, useContext, createContext } from 'react';

export const MydataContext = createContext();

export const MydataProvider = (props) => {
    const [mydata, setMydata] = useState('')

    return (
        <SearchContext.Provider value={[mydata, setMydata]}>
            {props.children}
        </SearchContext.Provider>
    );
}
```
<sup>MydataContext.js</sup>

---

### This allows us to access two functions:

```MydataProvider``` is the provider which we wrpa around the jsx elements for which we want to provide access to the context.

```MydataContext``` is the context it's self, which is accessed within the componenet that needs access as follows:

```
import React, { useContext } from 'react';
import { MydataContext } from './MydataContext';


function MyComponent() => {
    const [mydata, setMydata] = useContext(MydataContext)

    return (
        <div>
        </div>
    )
}

export default MyComponent;
```
<sup>MyComponent.js</sup>
 