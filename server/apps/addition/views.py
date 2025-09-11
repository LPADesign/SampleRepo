from django.shortcuts import render

from django.http import JsonResponse

def add(request):
    try:
        # Extract query parameters ?a=3&b=5
        a = int(request.GET.get("a", 0))
        b = int(request.GET.get("b", 0))
        result = a + b
        return JsonResponse({"a": a, "b": b, "result": result})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
