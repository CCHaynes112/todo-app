import marshmallow


class TaskSchema(marshmallow.Schema):
    id = marshmallow.fields.Int()
    title = marshmallow.fields.Str(required=True)
    description = marshmallow.fields.Str(required=True)