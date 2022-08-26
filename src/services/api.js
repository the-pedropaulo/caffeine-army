let BASE = "http://localhost:3333";

export default {
    getEnterprise: async(cnpj) => {
        const res = await fetch(BASE+"/clients/"+cnpj);

        if(res.status === 200 || res.status === 201) {
            const json = await res.json();
            
            return json;
        }
    },
    signIn: async (email, password) => {
        const res = await fetch(BASE+"/auth/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        if(res.status === 200 || res.status === 201) {
            const json = await res.json();
            
            return json;
        }
    }
}