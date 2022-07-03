module.exports = class UserDto {
    email;
    roles;
    id;
    isVerified;

    constructor(model) {
        this.id = model._id;
        this.email = model.email;
        this.roles = model.roles;
        this.isVerified = model.isVerified;
    }
}