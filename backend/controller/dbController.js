import { db } from "../connect.js";
import axios from "axios";
import { getSubmission, postSubmission } from "./apiController.js";

export const postCode= async (req,res)=>{
    try {
        console.log(req.body.language_id+""+req.body.source_code+""+req.body.stdin);

        const code=Buffer.from(req.body.source_code, 'utf8').toString('base64');
        const input=Buffer.from(req.body.stdin, 'utf8').toString('base64');

        postSubmission.data.language_id=req.body.language_id,
        postSubmission.data.source_code=code,
        postSubmission.data.stdin = input;

        const response = await axios.request(postSubmission);
        console.log(response.data.token);
        return res.status(200).json(response.data);
    } catch (error) {
         console.error(error);
        return res.status(403).json(error);
    }
}

export const getCode = async(req,res)=>{
    try {
        // console.log(`${req.params.token}`);
        getSubmission.url+=`${req.params.token}`;
        console.log(getSubmission.url);
        const response = await axios.request(getSubmission);
        console.log(response.data);

        const q="INSERT INTO codes(`language`,`code`,`input`,`output`) VALUES (?) ";

        const values=[
            response.data.language.name,
            Buffer.from(response.data.source_code, 'base64').toString('utf8'),
            Buffer.from(response.data.stdin, 'base64').toString('utf8'),
            Buffer.from(response.data.stdout, 'base64').toString('utf8')
        ]
        
        console.log(values);

        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(Buffer.from(response.data.stdout, 'base64').toString('utf8'));
          });

        // return res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(403).json(error);
    }

}

export const getEntry =(req,res)=>{
    const q='select * from codes';

    db.query(q,(err,data)=>{
        if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    })
}