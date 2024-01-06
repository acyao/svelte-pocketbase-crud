import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';


export const actions={
    create: async({request})=>{
        const pb = new PocketBase("http://127.0.0.1:8090");
        await pb.admins.authWithPassword(SECRET_EMAIL,SECRET_PASSWORD);
        
        const form = await request.formData();

        const jobname = form.get('jobname') ?? '';
        const salary = form.get('salary')?? '';

        const newRecord = {
            jobname,
            salary
        };

        const record = await pb.collection('jobs').create(newRecord);
    }
}

