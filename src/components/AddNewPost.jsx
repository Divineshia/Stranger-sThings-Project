

export default function AddNewPost(){


    return(
    <>
    <div className="new form">
      <h1>Add New post</h1>
    <form className='form' onSubmit ={handleSubmit}>
            <label>Title:{" "}
            <input value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            </form>
            </div>
            </> )
        }