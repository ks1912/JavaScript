var a=10, b=10, c=20;
//*******************************************************
// Try Block
//*******************************************************

if(a == b)
{ 
    try
    {
        console.log("Try block executed");
    }
    catch(e)
    {
        console.error("Catch block executed \n",e);
    }
}

//*******************************************************
// Try Catch Block
//*******************************************************

if(a == b)
{ 
    try
    {
        console.log("Try block executed",kunal);
    }
    catch(e)
    {
        console.error("Catch block executed \n",e);
    }
}

//*******************************************************
// Try Cathc Finally Block 
//*******************************************************
if(a == b)
{ 
    try
    {
        console.log("Try block executed");
    }
    catch(e)
    {
        console.error("Catch block executed",e);
    }
    finally
    { 
        console.log("Irrespective of try or catch finally will execute!");
    }
}

//*******************************************************
// Try Throw Block 
//*******************************************************

if(a == b)
{ 
    try
    {
        console.log("Try block executed");
    }
    catch(e)
    {
        console.log("Catch block executed",e);
    }
    throw console.log("Throw is executed");
    // catch(e)
    // {
    //     console.error("Catch block executed \n",e);
    // }
}
