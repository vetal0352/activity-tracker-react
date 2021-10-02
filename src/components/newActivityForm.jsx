const NewActivityForm = () => {
    // to do receiving activity types from DAL
    const typesArray = ["ride", "run"]
    return <div className="add-activity">
        <form>
            <b>Add new activity:</b>
            <input name="startTime" type="time" placeholder="Start time HH:MM" />
            <input name="finishTime" type="time" placeholder="Finish time HH:MM" />
            <input name="distance" type={Number} placeholder="Distance" />
            <select name="activityType" placeholder="Select activity type">
                {typesArray.map(x => <option> {x} </option>)}
            </select>
            <button name="save">Save</button>
        </form>
    </div>
}

export default NewActivityForm
