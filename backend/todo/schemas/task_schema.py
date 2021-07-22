import marshmallow


class TaskSchema(marshmallow.Schema):
    title = marshmallow.fields.Str()
    description = marshmallow.fields.Str()