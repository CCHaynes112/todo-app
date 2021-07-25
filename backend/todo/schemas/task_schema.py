import marshmallow


class TaskSchema(marshmallow.Schema):
    id = marshmallow.fields.Int()
    title = marshmallow.fields.Str()
    description = marshmallow.fields.Str()