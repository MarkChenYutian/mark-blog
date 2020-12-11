---
layout: post
tags: Algorithm
excerpt_separator: <!--more-->
title: "分治算法 | Divide and Conquer"
---

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            }
        });
    </script>
</head>
分治算法可以解决这样的问题：问题可以被分为多个（通常是2个）子问题，通过一种简便方式合并每个子问题的答案就可以得到总问题的答案。分治算法分为三个步骤：分割，解决，合并。这里提供了三个非常经典的分治算法例子：最大子序列问题，矩阵快速乘法和归并排序。
<!--more-->

# Divide and Conquer Algorithm

## Chapter 4.1 Maximum subarray problem
* We can use divide-and-conquer strategy to find the subarray that has a maximum sun in a given subarray.
* We can use the standard format used to analyze the divide-and-conquer problems to analyze the Maximum-subarray-problem

### Standard format to analyze the Divide-and-Conquer problem:

1. **Divide**
   Each time, we can split the input array into two *roughly* equal-scale sub-arrays. And we want to find the maximum subarray in the given array.
2. **Conquer**
   When there is only one element in the splited subarray, the only element must be the maximum subarrat in the array.
3. **Combine**
   We should compare the sum of `left_maximum_subarray` and the `right_maximum_subarray`.
   It should be notice that we should also concern about the maximum subarray that across the middle point of splited subarrays.

To fulfill the requirements shown above, we can define two functions: `find_max_subarray` and `find_cross_subarray`
The code is shown below:

```Python
     def find_cross_array(A,p,r,q):                              #find the maximum subarray that across two sub_problems
         l_sum,r_sum=A[r],A[r+1]
         l_index,r_index=r,r+1
     
         total=0
         for ctr in range (r,p-1,-1):                            #left_part of maximum subarray in the middle
             total+=A[ctr]
             if total>l_sum:
                 l_index=ctr
                 l_sum=total
     
         total=0
         for ctr in range (r+1,q+1,1):                           #right_part of maximum subarray in the middle
             total+=A[ctr]
             if total>r_sum:
                 r_index=ctr
                 r_sum=total
         return(l_index,r_index,(l_sum+r_sum))
     
     def find_max_subarray(A,p,q):
         if p==q: return (p,q,A[p])                              #base case of recurssion
         
         r=int((p+q)/2)
         (l_l_index,l_r_index,l_sum)=find_max_subarray(A,p,r)    #find left max subarray
         (r_l_index,r_r_index,r_sum)=find_max_subarray(A,r+1,q)  #find right max subarray
         (m_l_index,m_r_index,m_sum)=find_cross_array(A,p,r,q)   #find crossing max subarray
         
         if l_sum>r_sum and l_sum>m_sum: return (l_l_index,l_r_index,l_sum)
         elif r_sum>l_sum and r_sum>m_sum: return (r_l_index,r_r_index,r_sum)
         else: return (m_l_index,m_r_index,m_sum)
```

these two functions are can solve the maximum subarray problem recurssively.
    
### Analyzing the Time complexity of Algorithm

And they has a time complexity shown below:

$$
T(n)=\begin{cases}
\Theta(1), & n=1\\
2T(n/2)+\Theta(n)+\Theta(1)+\Theta(1), & n>1\\
\end{cases}
$$

Consider the characteristic of $\Theta (n)$ function, we can simplify the cost of function $T(n)$ into this new function:

$$
T(n)=\begin{cases}
\Theta(1),&n=1\\
2T(n/2)+\Theta(n),&n>1\\
\end{cases}
$$

From the function above, we can see that the finction divide the problem into a tree that has $\lg n$ levels and combining all the answers in each tree will has a time cost of $\Theta(n)$. So the **Total time cost for this Divide-and-Conquer** algorithm is:

$$
T(n)\in \Theta (n\lg n)
$$


## Chapter 4.3 Merge Sort and Quick Sort
### Merge Sort
```Python
def combine(A,p,q,r):
    L=list()
    R=list()
    for l_index in range (p,q+1):
        L+=[A[l_index]]
    for r_index in range (q + 1,r+1):
        R+=[A[r_index]]
    l_index=0
    r_index=0
    while l_index<len(L) and r_index<len(R):
        if L[l_index]<R[r_index]:
            A[p]=L[l_index]
            p+=1
            l_index+=1
        else:
            A[p]=R[r_index]
            p+=1
            r_index+=1
    if r_index<len(R):
        while r_index<len(R):
            A[p]=R[r_index]
            p+=1
            r_index+=1
    elif l_index<len(L):
        while l_index<len(L):
            A[p]=L[l_index]
            p+=1
            l_index+=1
    return A

def merge_sort(A,p,r):
    if p<r:
        q=int((p+r)/2)
        merge_sort(A,p,q)
        merge_sort(A,q+1,r)
        combine(A,p,q,r)
    return A
```

### Quick Sort
```Python
def quick_sort(array,begin,end):
    if begin<end:
        if begin-end==1:      #Very important, or the program will go into infinity recurssion when len(array)=2
            randomize_standard(array,begin,end)
        mid=division(array,begin,end)
        print(array)
        quick_sort(array,begin,mid-1)
        quick_sort(array,mid,end)

def division(array,begin,end):
    standard=array[end]
    i=begin-1
    for j in range (begin,end):
        if array[j]<=standard:
            i+=1
            array[i],array[j]=array[j],array[i]
    array[end],array[i+1]=array[i+1],array[end]
    return i+1

def randomize_standard(array,begin,end):
    import random
    random_index=begin+int((end-begin-1)*random.random())
    print(random_index,begin,end)
    array[random_index],array[end]=array[end],array[random_index]

#TEST CODE BELOW
if __name__=='__main__':
    a=[1,2,5,3,6,5,4,2,63,0,48,25,16,29]
    quick_sort(a,0,len(a)-1)
```


## Chapter 4.3 Strassen's method to mutiply Matrices*
Instead of performing 8 recursive $n/2\times n/2$ matrices mutiplications, the Strassen's method to multiply Matrices only 7 times. This reduce the time cost of matrices mutiplication from $\Theta (n^3)$ to $\Theta (n^{\lg 7})\sim\Theta (n^{2.78})$
However, the **reduce in time complexity** leads to the **increasing Space complexity**

### Brief description of the algorithm
1. Divide the input matrices $A$ and $B$ and output matrix $C$ into $n/2\times n/2$ *submatrices*, as the equation 4.9 below has shown. This step will only cost $\Theta(1)$ time to complete. The code below define the function `square_matrix_mutiply_recursive` to perform this step.
2. Create 10 matrices, noted as $S_1 ,S_2,\cdots,S_{10}$, each matrix has a scale of $n/2 \times n/2$ and they are the sum/difference of two matrices created in step 1. We can create all 10 matrices in $\Theta (n^2)$ time.
3. Using the submatrices created in step 1 and 10 matrices created in step 2, recursively compute seven matrix products $P_1,P_2,\cdots,P_7$. Each matrix $P_i$ still has a scale of $n/2 \times n/2$
4. Compute the designed submatrices $C_{11},C_{12},C_{21},C_{22}$ of the result matrix $C$ by adding and substracting various combinations of the $P_i$ matrices. We can compute all four submatrices in $\Theta(n^2)$ time.

### Time Complexity of Strassen's method to multiply Matrices

$$
T(n)=\begin{cases}
\Theta(1),& n=1\\
7T(\frac{{n}}{2})+\Theta(n^2),& n>1
\end{cases}
$$

By analyzing this recurssive function, we can know that the algorithm `matrix_multiply` has a time complexity of $\Theta(n^{\lg 7})$, which is a great improvement comparing to the original time complexity of $\Theta(n^3)$

### Calculate the $S_i$ matrices
Calculate such matrices:

$S_1=B_{12}-B_{22}$
$S_2=A_{11}+A_{12}$
$S_3=A_{21}+A_{22}$
$S_4=B_{21}-B_{11}$
$S_5=A_{11}+A_{22}$
$S_6=B_{11}+B_{22}$
$S_7=A_{12}-A_{22}$
$S_8=B_{21}+B_{22}$
$S_9=A_{11}-A_{21}$
$S_{10}=B_{11}+B_{12}$



### Calculate the $P_i$ matrices
Calculate these matrices by using the algorithm recurssively
These matrices are based on the calculation of $S_i$ matrices

$P_1 = A_{11}\cdot S_1$
$P_2=B_{22}\cdot S_2$
$P_3=B_{11}\cdot S_3$
$P_4=A_{22}\cdot S_4$
$P_5=S_5 \cdot S_6$
$P_6=S_7 \cdot S_8$
$P_7=S_9 \cdot S_{10}$

### Final step and code in Python
We can combine all the answers from 7 sub-problems by using these formulas:

$C_{11}=P_5+P_4−P_2+P_6$

$C_{12}=P_1+P_2$

$C_{21}=P_3+P_4$

$C_{22}=P_5+P_1−P_3−P_7$


And the code is shown below:
```Python
def matrix_addition(A,B,A_left_up,B_left_up,dimension,sign):        #A+B when sign=True, A-B when sign=False
    
        A_row_low=A_left_up[0]
        A_col_low=A_left_up[1]
    
        B_row_low=B_left_up[0]
        B_col_low=B_left_up[1]

        C=list()
        for ctr in range (0,dimension): C+=[[0]*dimension]

        A_row=A_row_low-1
        B_row=B_row_low-1
        for row in range (0,dimension):

                A_row+=1
                B_row+=1
                A_col=A_col_low-1
                B_col=B_col_low-1

                for col in range (0,dimension):
                        A_col+=1
                        B_col+=1
                        if sign : C[row][col]=A[A_row][A_col]+B[B_row][B_col]
                        else: C[row][col]=A[A_row][A_col]-B[B_row][B_col]

        return C

def matrix_write(C,Input_matrix,left_up,dimension):
        low_row=left_up[0]
        low_col=left_up[1]

        write_row=low_row-1
        for row in range (0,dimension):
                write_row+=1
                write_col=low_col-1

                for col in range (0,dimension):
                        write_col+=1
                        C[write_row][write_col]=Input_matrix[row][col]

        return C

def matrix_fillup(A,target_dimension,now_dimension):          #Target_dimension>Present_dimension, Using [0] to fill a matrix of n*n scale to m*m
        fill_up=target_dimension-now_dimension
	
        for fill_row in range (0,now_dimension):
                A[fill_row]+=[0]*fill_up
	
        for add_row in range (now_dimension,target_dimension):
                A+=[[0]*target_dimension]
	
        return A
		
def matrix_multiply(A,B,A_left_up,B_left_up,dimension):
        if dimension==1: return [[A[A_left_up[0]][A_left_up[1]]*B[B_left_up[0]][B_left_up[1]]]]         #Base Case
    
        else:
                A_row_low=A_left_up[0]
                A_col_low=A_left_up[1]
                A_row_mid=A_row_low+int(dimension/2)
                A_col_mid=A_col_low+int(dimension/2)
        
                B_row_low=B_left_up[0]
                B_col_low=B_left_up[1]
                B_row_mid=B_row_low+int(dimension/2)
                B_col_mid=B_col_low+int(dimension/2)

                A_11=(A_row_low,A_col_low)              #Left-up corner of sub-matrices of A
                A_12=(A_row_low,A_col_mid)
                A_21=(A_row_mid,A_col_low)
                A_22=(A_row_mid,A_col_mid)

                B_11=(B_row_low,B_col_low)              #Left-up corner of sub-matrices of B
                B_12=(B_row_low,B_col_mid)
                B_21=(B_row_mid,B_col_low)
                B_22=(B_row_mid,B_col_mid)

                new_dim=int(dimension/2)
                #matrix_addition(A,B,A_left_up,B_left_up,dimension,sign)
                S_1=matrix_addition(B,B,B_12,B_22,new_dim,False)
                S_2=matrix_addition(A,A,A_11,A_12,new_dim,True)
                S_3=matrix_addition(A,A,A_21,A_22,new_dim,True)
                S_4=matrix_addition(B,B,B_21,B_11,new_dim,False)
                S_5=matrix_addition(A,A,A_11,A_22,new_dim,True)
                S_6=matrix_addition(B,B,B_11,B_22,new_dim,True)
                S_7=matrix_addition(A,A,A_12,A_22,new_dim,False)
                S_8=matrix_addition(B,B,B_21,B_22,new_dim,True)
                S_9=matrix_addition(A,A,A_11,A_21,new_dim,False)
                S_10=matrix_addition(B,B,B_11,B_12,new_dim,True)

                S=(0,0)

                #matrix_multiply(A,B,A_left_up,B_left_up,dimension):
                P_1=matrix_multiply(A,S_1,A_11,S,new_dim)
                P_2=matrix_multiply(S_2,B,S,B_22,new_dim)
                P_3=matrix_multiply(S_3,B,S,B_11,new_dim)
                P_4=matrix_multiply(A,S_4,A_22,S,new_dim)
                P_5=matrix_multiply(S_5,S_6,S,S,new_dim)
                P_6=matrix_multiply(S_7,S_8,S,S,new_dim)
                P_7=matrix_multiply(S_9,S_10,S,S,new_dim)

                #matrix_addition(A,B,A_left_up,B_left_up,dimension,sign)
                P=(0,0)
                C_12=matrix_addition(P_1,P_2,P,P,new_dim,True)
                C_11=matrix_addition(matrix_addition(P_5,P_4,P,P,new_dim,True),matrix_addition(P_2,P_6,P,P,new_dim,False),P,P,new_dim,False)     #C_11=P_5+P_4-P_2+P_6=(P_5+P_6)-(P_2-P_6)
                C_21=matrix_addition(P_3,P_4,P,P,new_dim,True)
                C_22=matrix_addition(matrix_addition(P_5,P_1,P,P,new_dim,True),matrix_addition(P_3,P_7,P,P,new_dim,True),P,P,new_dim,False)     #C_22=P_5+P_1-P_3-P_7=(P_5+P_1)-(P_3+P+7)

                #Initiallize the result matrix C
                C=list()
                for ctr in range (0,dimension): C+=[[0]*dimension]

                #Write in the matrixes          matrix_write(C,Input_matrix,left_up,dimension)
                matrix_write(C,C_11,(0,0),new_dim)
                matrix_write(C,C_12,(0,int(dimension/2)),new_dim)
                matrix_write(C,C_21,(int(dimension/2),0),new_dim)
                matrix_write(C,C_22,(int(dimension/2),int(dimension/2)),new_dim)

                return C

def matrix_delete_edge(A,primitive_dimension):
        A=A[:primitive_dimension]
        for ctr in range (0,primitive_dimension):
                A[ctr]=A[ctr][:primitive_dimension]

        return A

def matrix_advanced_multiply(A,B):				#Fill up the matrix into 2^n*2^n dimension automatically, less parameters to concern
        dimension=len(A)
        i=0
        while 2**i<dimension: i+=1
        target_dimension=2**i						#Find the most closely 2^i to n to use the function 
                
        if target_dimension!=dimension:
                A=matrix_fillup(A,target_dimension,dimension)
                B=matrix_fillup(B,target_dimension,dimension)
		
        C=matrix_multiply(A,B,(0,0),(0,0),target_dimension)

        C=matrix_delete_edge(C,dimension)
	
        return C




#TEST CODE,		TEST CASE #1,	SCALE=2^N*2^N
A=[
        [1,2,3,4],
        [1,3,2,3],
        [2,1,3,2],
        [1,4,2,3]
        ]
B=[
        [2,4,5,8],
        [2,3,1,2],
        [1,3,2,3],
        [2,5,1,4]
        ]
C=matrix_advanced_multiply(A,B)
print(C)

#TEST CODE,		TEST CASE #2,	SCALE!=2^N*2^N
A=[
        [1,3,2],
        [1,8,2],
        [6,3,5]
        ]
B=[
        [2,9,4],
        [3,1,7],
        [4,5,2]
        ]
C=matrix_advanced_multiply(A,B)
print(C)

```