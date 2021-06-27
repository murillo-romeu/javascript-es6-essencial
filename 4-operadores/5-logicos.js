// AND lógico (&&)
exp1 && exp2

true  && true  === true
true  && false === false
false && true  === false
false && false === false
false && 'Yes' === false
'Yes' && 'No'  === 'No'
"Yes" && false === false

// OR lógico (||)
exp1 || exp2

true  && true  === true
true  && false === true
false && true  === true
false && false === false
false && 'Yes' === 'Yes'
'Yes' && 'No'  === 'Yes'
"Yes" && false === 'Yes'

// NOT lógico (!) negação
!true === false
!false === true
!'Yes' === false
!!'Yes' === true

