export interface Post {
    IdPost : number;
    Title : string;
    Body : string;
    CreateDate : Date;
    LastUpdate : Date;
    IdUser : number;
    IsPublic : boolean;
    IdDraft : number;
}