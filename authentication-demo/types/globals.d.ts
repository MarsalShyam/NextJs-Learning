export {}

//moderator can manage contents and admin can manage moderator
export type Roles="admin"|"moderator";

declare global{
    interface CustomJwtSessionClaims{
        metadata:{
            role?:Roles;
        }
    }
}