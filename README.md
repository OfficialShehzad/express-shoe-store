

MODULES REQUIRED

models
---
1.id
2.name
3.size
4.image
5.stock
6.real_price
7.discount_price

brands
---
1.id
2.name

users
---
1.id
2.name
3.email
4.password
5.user_type
6.created_at
7.updated_at

orders
---
1.id
2.user_id
3.model
4.price
5.status -> placed, processing, delivering, delivered