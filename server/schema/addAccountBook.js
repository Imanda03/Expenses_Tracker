import mongoose from "mongoose";

const accountBookSchema = mongoose.Schema({
    accountBook:{
        type: String,
        required: true,
        min: 4
    },
    accountAmount:{
        type: Number,
        required: true,
    }
});

const AccountBook = mongoose.model("AccountBook", accountBookSchema);
export default AccountBook;